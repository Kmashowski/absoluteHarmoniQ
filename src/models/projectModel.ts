import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
  name: string;
  description: string;
  owner: mongoose.Types.ObjectId;
  members: mongoose.Types.ObjectId[];
  status: string;
  startDate: Date;
  endDate: Date;
}

// src/models/Project.ts
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date }, // <- quitar required
  endDate: { type: Date },   // <- quitar required
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // <- quitar required
});


const Project: Model<IProject> = mongoose.model<IProject>("Project", projectSchema);
export default Project;
