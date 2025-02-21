import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

const BallImage = ({ x, y, radius, src }) => {
    const [image] = useImage(src);
    return (
        <Image
            x={x - radius}
            y={y - radius}
            width={radius * 2}
            height={radius * 2}
            image={image}
            offsetX={radius}
            offsetY={radius}
        />
    );
};

const BallPit = ({ width = 800, height = 600 }) => {
    const [balls, setBalls] = useState([]);
    const sceneRef = useRef(null);
    const engineRef = useRef(Matter.Engine.create());
    const runnerRef = useRef(Matter.Runner.create());
    const mousePosition = useRef({ x: width / 2, y: height / 2 });

    useEffect(() => {
        const engine = engineRef.current;
        const world = engine.world;
        const runner = runnerRef.current;

        // Walls
        const ground = Matter.Bodies.rectangle(width / 2, height - 10, width, 20, { isStatic: true });
        const leftWall = Matter.Bodies.rectangle(30, height / 2, 20, height, { isStatic: true });
        const rightWall = Matter.Bodies.rectangle(width + 50, height / 2, 20, height, { isStatic: true });
        const ceiling = Matter.Bodies.rectangle(width / 2, 40, width, 20, { isStatic: true });

        Matter.World.add(world, [ground, leftWall, rightWall, ceiling]);

        // Balls
        const createdBalls = [];
        for (let i = 0; i < 11; i++) {
            const radius = 50;
            const ball = Matter.Bodies.circle(
                width / 2 + (Math.random() - 0.5) * width * 0.2,
                height / 2 + (Math.random() - 0.5) * height * 0.2,
                radius,
                {
                    restitution: 0.9,
                }
            );
            ball.render = {
                src: `/img/balls/${i + 1}.png`,
                radius: radius,
            };
            createdBalls.push(ball);
            Matter.World.add(world, ball);
        }
        setBalls(createdBalls);

        Matter.Runner.run(runner, engine);

        // Apply force towards mouse position
        const applyAttraction = () => {
            createdBalls.forEach(ball => {
                const dx = mousePosition.current.x - ball.position.x;
                const dy = mousePosition.current.y - ball.position.y;
                const distance = Math.sqrt(dx * dx + dy * dy) || 1;
                const forceMagnitude = 0.01; // Updated force magnitude
                Matter.Body.applyForce(ball, ball.position, {
                    x: (dx / distance) * forceMagnitude,
                    y: (dy / distance) * forceMagnitude,
                });
            });
        };

        // Update loop for React-Konva
        const update = () => {
            applyAttraction();
            setBalls([...createdBalls]);
            requestAnimationFrame(update);
        };
        update();

        // Global mouse move listener with canvas offset
        const handleGlobalMouseMove = (e) => {
            const canvasRect = sceneRef.current.content.getBoundingClientRect();
            mousePosition.current = {
                x: e.clientX - canvasRect.left,
                y: e.clientY - canvasRect.top,
            };
        };

        window.addEventListener('mousemove', handleGlobalMouseMove);

        return () => {
            Matter.Runner.stop(runner);
            Matter.Engine.clear(engine);
            Matter.World.clear(world);
            window.removeEventListener('mousemove', handleGlobalMouseMove);
        };
    }, [width, height]);

    return (
        <div>
            <Stage width={width} height={height} ref={sceneRef} style={{ background: 'transparent' }}>
                <Layer>
                    {balls.map((ball, index) => (
                        <BallImage
                            key={index}
                            x={ball.position.x}
                            y={ball.position.y}
                            radius={ball.render.radius}
                            src={ball.render.src}
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    );
};

export default BallPit;
