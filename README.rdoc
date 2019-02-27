1. Final decision regarding FE WC approach:
	- Since the JS logic supporting the creating and communication of the iframe will be generated and served from the OMNI-API server, an ad hoc solution for has been chosen: creating a custom web component, using no framework
	- Bundle all the omni js in the omni microserver using webpack
	- Transpile ES6 using webpack to ensure IE11 support

2. Polyfills:
	- Polyfills will be provide our custom web component one we use it in the platform, using the same one currenly supporting the new FE Architecture
	- For local development in the OMNI-API server, custom polyfills are provided. 

3. Work to do:
	- Investigate relevance of console warning message on sandbox attribute when using this on the platform
	- OMNI-API server polyfills must be loaded only when necessary
	- Investigate how to style iframe if needed (i.e: CSS Imports)
