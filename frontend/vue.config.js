module.exports = {
    outputDir: process.env.OUTPUT_DIR,
	baseUrl: process.env.NODE_ENV === 'gh-pages' ? '/merge-draft/dist/' : '/'
};
