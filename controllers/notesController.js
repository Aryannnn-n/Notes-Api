import Note from "../models/Note.js";

export const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }
    const note = await Note.create({
      title,
      content,
      user: req.user._id,
    });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 