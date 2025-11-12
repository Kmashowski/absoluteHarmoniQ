import Project from "../models/projectModel";
import { Request, Response } from "express";

// Crear proyecto
export const createProject = async (req: Request, res: Response) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project); // ✅ Devuelve el proyecto creado
  } catch (error) {
    res.status(400).json({ message: "Error al crear proyecto", error });
  }
};

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener proyectos", error });
  }
};


// Obtener proyecto por ID
export const getProjectById = async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Proyecto no encontrado" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener proyecto", error });
  }
};

// Actualizar proyecto
export const updateProject = async (req: Request, res: Response) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Proyecto actualizado correctamente", project: updated });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar proyecto", error });
  }
};

// Eliminar proyecto
export const deleteProject = async (req: Request, res: Response) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Proyecto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar proyecto", error });
  }
};
