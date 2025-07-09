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
