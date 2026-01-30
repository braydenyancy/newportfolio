import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { randomColor } from "../assets/colors";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import space from '../../assets/images/cosmos.jpg';
import earthMesh from '../assets/images/earth.jpg';
import cosmosMesh from '../assets/images/cosmos.jpg';

const Canvas = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;

        // need a scene, camera and renderer
        const scene = new THREE.Scene();

        // CAMERA

        // camera takes 3 arguments
        // field of view - how much of the scene is visible at once
        // aspect ratio - width divided by height, based off users browser window or the div component we set
        // view frustrum - controls which objects are visible relative to the camera itself

        const fov = 75;
        const aspect = width / height;
        const near = 0.1;
        const far = 1000;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

        // RENDERER
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        canvasRef.current.appendChild(renderer.domElement);

        camera.position.setY(0.5)
        camera.position.setZ(5);

        // LIGHTING
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(10, 10, 10);

        const ambientLight = new THREE.AmbientLight(0xffffff);

        scene.add(pointLight, ambientLight);

        const lightHelper = new THREE.PointLightHelper(pointLight);
        scene.add(lightHelper);
        const gridHelper = new THREE.GridHelper(500, 50);
        scene.add(gridHelper);

        // TORUSKNOT

        const torusTexture = new THREE.TextureLoader().load(cosmosMesh);
        const geometry = new THREE.TorusKnotGeometry(8, 2, 16, 100);
        const material = new THREE.MeshStandardMaterial({ map: torusTexture });
        const torus = new THREE.Mesh(geometry, material);
        torus.position.z = -120;
        torus.position.x = -52;

        scene.add(torus);

        // EARTH
        const earthTexture = new THREE.TextureLoader().load(earthMesh);

        const earth = new THREE.Mesh(
            new THREE.SphereGeometry(3, 32, 32),
            new THREE.MeshStandardMaterial({ map: earthTexture })
        )

        scene.add(earth);
        earth.position.z = -24;
        earth.position.setX(12);

        // ORBIT CONTROLS

        // const controls = new OrbitControls(camera, renderer.domElement);


        // RANDOM CUBES
        const boxes = [];

        function addBoxes() {
            const geometry = new THREE.BoxGeometry(2, 2, 2);
            const material = new THREE.MeshStandardMaterial({
                color: randomColor(),
                wireframe: true
            });
            const box = new THREE.Mesh(geometry, material);

            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
            box.position.set(x, y, z);
            scene.add(box);
            boxes.push(box);
        }


        // RANDOM STARS

        function addStars() {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);
            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
            star.position.set(x, y, z);
            scene.add(star);
        }

        Array(200).fill().forEach(addBoxes);
        Array(200).fill().forEach(addStars);


        // OLD BACKGROUND METHOD

        // const spaceTexture = new THREE.TextureLoader().load(space);
        // scene.background = spaceTexture;


        // GSAP CONTROLS
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.outletDiv',
                start: "top top",
                end: "bottom+=3000 top",
                scrub: 1,
                scroller: '.outletDiv',
                markers: true,
            }
        });

        // second position
        // dont forget the '<' syntax to sync animations with previous ones
        tl
            .to(camera.position, { x: -4, z: 20, duration: 4 })
            .to(earth.position, { x: -12, y: -4, z: 4, duration: 4 }, '<')
            .to(earth.scale, { x: 2, y: 2, z: 2, duration: 4 }, '<')

            // third position
            .to(camera.position, { y: 24, duration: 4 })
            .to(camera.rotation, { x: -1, duration: 4 }, '<')

            // fourth position
            .to(earth.position, { x: 2, z: -4, duration: 4 })

        // ANIMATION LOOP

        const animate = () => {
            requestAnimationFrame(animate);

            // earth animation
            earth.rotation.x += 0.01;
            earth.rotation.z += 0.01;

            // torus animation
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.005;

            boxes.forEach(box => {
                box.rotation.x -= 0.01;
                box.rotation.y -= 0.01;
            });

            // controls.update();

            renderer.render(scene, camera);
        };

        animate();

    }, [])

    return (
        <>
            <div ref={canvasRef} style={{
                position: 'absolute',
                width: '100vw',
                height: '100vh'
            }}>
            </div>
        </>
    )
}

export default Canvas;