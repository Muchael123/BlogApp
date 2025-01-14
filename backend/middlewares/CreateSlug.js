const CreateSlug = (req, res, next) => {
    const {slug} = req.body;
    if(slug){
        req.body.slug = slug.toLowerCase().trim().replace(/ /g, "-");
    }
    next();
}
export default CreateSlug;