import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

// Create a person
export const createPerson = asyncHandler(async (req, res) => {
  const { name, role, image, description } = req.body;

  try {
    const person = await prisma.person.create({
      data: {
        name,
        role,
        image,
        description,
      },
    });
    res.send({ message: "Person added successfully", person });
  } catch (err) {
    console.error("Error creating person:", err.message);
    res.status(500).send({ message: err.message });
  }
});

// Get all people
export const getAllPeople = asyncHandler(async (req, res) => {
  try {
    const people = await prisma.person.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.send(people);
  } catch (err) {
    res.status(500).send({ message: "Error fetching people" });
  }
});

// Get a specific person
export const getPerson = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const person = await prisma.person.findUnique({
      where: { id },
    });

    if (!person) {
      return res.status(404).send({ message: "Person not found" });
    }
    res.send(person);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Update a person
export const updatePerson = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, role, image, description } = req.body;

  try {
    const updatedPerson = await prisma.person.update({
      where: { id },
      data: {
        name,
        role,
        image,
        description,
      },
    });
    res.send({ message: "Person updated successfully", updatedPerson });
  } catch (err) {
    console.error("Error updating person:", err.message);
    if (err.code === "P2025") {
      return res.status(404).send({ message: "Person not found" });
    }
    res.status(500).send({ message: err.message });
  }
});

// Delete a person
export const deletePerson = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.person.delete({ where: { id } });
    res.send({ message: "Person deleted successfully" });
  } catch (err) {
    console.error("Error deleting person:", err.message);
    if (err.code === "P2025") {
      return res.status(404).send({ message: "Person not found" });
    }
    res.status(500).send({ message: err.message });
  }
});
