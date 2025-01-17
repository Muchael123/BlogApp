import validator from 'validator';
import fetchUserbyId from '../lib/fetchUserbyId.js';

const postMiddleware = (req, res, next) => {
    const { title, slug, desc, content, coverimg } = req.body;
    const user = req.userId;
    const errors = [];

    // Check if all required fields exist
    if (!title || !slug || !content || !user) {
        errors.push('All fields are required: title, slug, content, userId');
    } else {
        // Validate user ID
        if (!validator.isMongoId(user) || fetchUserbyId(user) === null) {
            errors.push('Invalid user ID');
        }

        // Validate title
        if (!validator.isLength(title, { min: 1, max: 100 }) || typeof title !== 'string') {
            errors.push('Title must be a string between 1 and 100 characters');
        }

        if (!validator.isSlug(slug)) {
            errors.push('Invalid slug format');
        }

        if (typeof content !== 'string') {
            errors.push('Content must be a valid string');
        }

        if (coverimg && typeof coverimg !== 'string') {
            errors.push('Cover image must be a valid string');
        }

        if (desc && typeof desc !== 'string') {
            errors.push('Description must be a valid string');
        }
    }

  
    if (errors.length > 0) {
        console.log(errors);
        return res.status(400).json({ errors });
    }

    console.log("Content verified...");
    next();
};

export default postMiddleware;
