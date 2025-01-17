const CreateSlug = (req, res, next) => {
    const {slug} = req.body;
    if(!slug){
        return res.status(400).json({ error: 'Slug is required' });
    }
    if (typeof slug !== 'string') {
        return res.status(400).json({ error: 'Slug must be a string' });
    }
    if(slug){
        req.body.slug = slug.toLowerCase().trim().replace(/ /g, "-");
    }
    next();
}
export default CreateSlug;