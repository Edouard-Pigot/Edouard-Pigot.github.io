import { Vector3 } from '@babylonjs/core';
import { ImportMeshAsync } from '@babylonjs/core/Loading/sceneLoader';
export class Object3D {
    constructor(meshFilePath, scene, position = Vector3.Zero(), rotation = Vector3.Zero(), parent = null) {
        this.position = position;
        this.rotation = rotation;
        this.mesh = null; // Initialize as null
        this.parent = parent;
        if (!scene) {
            throw new Error('Scene is required to load a mesh from a file.');
        }
        this.loadMeshFromFile(meshFilePath, scene);
    }
    async loadMeshFromFile(filePath, scene) {
        try {
            const result = await ImportMeshAsync(filePath, scene);
            if (result.meshes.length > 0) {
                this.mesh = result.meshes[0];
                this.updateMeshTransform();
            }
        }
        catch (error) {
            console.error(`Failed to load mesh from file: ${filePath}`, error);
        }
    }
    updateMeshTransform() {
        if (!this.mesh)
            return;
        this.mesh.position.copyFrom(this.position);
        this.mesh.rotation.copyFrom(this.rotation);
        if (this.parent) {
            this.mesh.position.addInPlace(this.parent.position);
            this.mesh.rotation.addInPlace(this.parent.rotation);
        }
    }
    setParent(parent) {
        this.parent = parent;
        this.updateMeshTransform();
    }
    setPosition(position) {
        this.position.copyFrom(position);
        this.updateMeshTransform();
    }
    setRotation(rotation) {
        this.rotation.copyFrom(rotation);
        this.updateMeshTransform();
    }
}
//# sourceMappingURL=Object3D.js.map