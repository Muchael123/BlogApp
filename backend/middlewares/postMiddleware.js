import validator from 'validator';
import fetchUserbyId from '../lib/fetchUserbyId.js';

const postMiddleware = (req, res, next) => {
    const { user, title, slug, desc, content, coverimg } = req.body;
    console.log(req.body, "\n")
    let errors = [];
    if (!title || !slug || !content || !user) {
        errors.push('All fields are required');
    }
    if (!validator.isMongoId(user) || fetchUserbyId(user) === null) {
        errors.push('Invalid user ID');
    }

    if (!checkTitle(title)) {
        errors.push('Title must be a string between 1 and 100 characters');
    }

    if (! typeof slug === 'string' || !validator.isSlug(slug)) {
        errors.push('Invalid slug format');
       
    }

    if (coverimg && typeof coverimg !== 'string') {
        errors.push('Cover image must be a valid string');
    }

    if (desc && typeof desc !== 'string') {
        errors.push('Description must be a valid string');
    }
   
     
    if (errors.length > 0) {
        console.log(errors)
        return res.status(400).json({ errors });
    }
   
    next();
};


const checkTitle = (title) => {
    return validator.isLength(title, { min: 1, max: 100 }) && typeof title === 'string';
};

export default postMiddleware;
