import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// ✅ Create a new hero brand with Cloudinary image
export const createHeroBrand = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file;

    if (!image) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const imageUrl = image.path; // Multer + Cloudinary gives secure_url in `path`

    const brand = await prisma.heroBrand.create({
      data: {
        title,
        imageUrl,
        description,
      },
    });

    res.status(201).json(brand);
  } catch (error) {
    res.status(500).json({ message: 'Error creating hero brand', error });
  }
};

// ✅ Get all hero brands
export const getAllHeroBrands = async (req, res) => {
  try {
    const brands = await prisma.heroBrand.findMany();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hero brands', error });
  }
};

// ✅ Update a hero brand (optionally including image)
export const updateHeroBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const image = req.file;

    const updateData = {
      title,
      description,
    };

    if (image) {
      updateData.imageUrl = image.path;
    }

    const updated = await prisma.heroBrand.update({
      where: { id: Number(id) },
      data: updateData,
    });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error updating hero brand', error });
  }
};

// ✅ Delete a hero brand
export const deleteHeroBrand = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.heroBrand.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: 'Hero brand deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting hero brand', error });
  }
};
