import * as THREE from 'three';
import { Geometry } from 'three';

class HomeAnimationService {
	private renderer: THREE.WebGLRenderer;
	private camera: THREE.PerspectiveCamera;
	private scene: THREE.Scene = new THREE.Scene();
	private container!: HTMLElement;
	private timeout: number = -1;

	private points: THREE.Mesh[] = [];
	private triangles: THREE.Mesh[] = [];
	private mainGroup: THREE.Group = new THREE.Group();

	private pointGeometry: THREE.SphereBufferGeometry = new THREE.SphereBufferGeometry(0.01, 64, 64);
	private pointMaterial: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
		color: 0x98A6E9,
		side: THREE.DoubleSide
	});

	constructor () {
		this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		this.renderer.setClearColor(0xffffff, 0);
		this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
	}

	public init (container: HTMLElement) {
		console.log('//////// THREE INIT //////////');
		this.container = container;
		this.container.appendChild(this.renderer.domElement);
		this.resize();
		this.animate();
		this.initLight();
		this.scene.add(this.mainGroup);
		this.renderer.render(this.scene, this.camera);
		window.addEventListener('resize', this.resize.bind(this));
	}

	public resize () {
		console.log('//////// THREE RESIZE ////////');
		this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
		this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
		console.log('Camera Aspect ::::', this.camera.aspect);
		this.camera.position.z = 10;
		this.camera.updateProjectionMatrix();
	}

	public initLight () {
		const al = new THREE.AmbientLight(0xffffff, 1);
		this.scene.add(al);
	}

	public generateNewPoint () {
		console.log('HOME::: ADD POINT');
		const MESH = new THREE.Mesh(this.pointGeometry, this.pointMaterial);
		MESH.position.set(
			Math.random() * 15 - 7.5,
			Math.random() * 10 - 5,
			Math.random() * 10 - 5,
		);

		this.addPoint(MESH);
	}


	public addPoint (mesh: THREE.Mesh) {
		this.points.push(mesh);
		const l = this.points.length;
		if (this.points.length > 2) {
			const triangle = new THREE.Triangle(mesh.position, this.points[l - 2].position, this.points[l - 3].position);
			const triangleGeometry = new THREE.Geometry();
			triangleGeometry.vertices.push(triangle.a, triangle.b, triangle.c);
			let normal = new THREE.Vector3(1, 1, 1);
			normal = triangle.getNormal(normal);
			triangleGeometry.faces.push(new THREE.Face3(0, 1, 2, normal));
			this.triangles.push(new THREE.Mesh(triangleGeometry, new THREE.MeshNormalMaterial({ side: THREE.DoubleSide })));
			this.mainGroup.add(this.triangles[this.triangles.length - 1]);
		}
		this.mainGroup.add(mesh);
	}

	public animate () {
		this.renderer.render(this.scene, this.camera);
		this.mainGroup.rotation.z += 0.001;
		this.mainGroup.rotation.x += 0.001;
		this.timeout = requestAnimationFrame(this.animate.bind(this));
	}

	public destroy () {
		cancelAnimationFrame(this.timeout);
		window.removeEventListener('resize', this.resize);
	}
}

const homeAnimationService = new HomeAnimationService();

export default homeAnimationService;
