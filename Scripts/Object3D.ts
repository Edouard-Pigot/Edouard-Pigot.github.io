import { Vector3, Mesh, Scene } from '@babylonjs/core';
import { ImportMeshAsync } from '@babylonjs/core/Loading/sceneLoader';

export class Object3D {
    position: Vector3;
    rotation: Vector3; // Babylon.js uses Vector3 for rotations (in radians)
    mesh: Mesh | null;
    parent: Object3D | null;

    constructor(
        meshFilePath: string,
        scene: Scene,
        position: Vector3 = Vector3.Zero(),
        rotation: Vector3 = Vector3.Zero(),
        parent: Object3D | null = null
    ) {
        this.position = position;
        this.rotation = rotation;
        this.mesh = null; // Initialize as null
        this.parent = parent;

        if (!scene) {
            throw new Error('Scene is required to load a mesh from a file.');
        }

        this.loadMeshFromFile(meshFilePath, scene);
    }

    async loadMeshFromFile(filePath: string, scene: Scene): Promise<void> {
        try {
            const result = await ImportMeshAsync(filePath, scene);
            if (result.meshes.length > 0) {
                this.mesh = result.meshes[0] as Mesh;
                this.updateMeshTransform();
            }
        } catch (error) {
            console.error(`Failed to load mesh from file: ${filePath}`, error);
        }
    }

    updateMeshTransform(): void {
        if (!this.mesh) return;

        this.mesh.position.copyFrom(this.position);
        this.mesh.rotation.copyFrom(this.rotation);

        if (this.parent) {
            this.mesh.position.addInPlace(this.parent.position);
            this.mesh.rotation.addInPlace(this.parent.rotation);
        }
    }

    setParent(parent: Object3D): void {
        this.parent = parent;
        this.updateMeshTransform();
    }

    setPosition(position: Vector3): void {
        this.position.copyFrom(position);
        this.updateMeshTransform();
    }

    setRotation(rotation: Vector3): void {
        this.rotation.copyFrom(rotation);
        this.updateMeshTransform();
    }
}
