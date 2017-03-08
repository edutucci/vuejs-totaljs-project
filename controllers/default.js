exports.install = function() {
	F.route('/', view_index);
	// or
	// F.route('/');
	F.route('/tools', view_tools);
	F.route('/about', view_about);
	F.route('/vuecomp', view_components);
};

function view_index() {
	var self = this;
	self.view('index');
}

function view_tools(){
	var self = this;
	self.view('tools');
}

function view_about(){
	var self = this;
	self.view('about');
}

function view_components(){
	var self = this;
	self.view('vuecomponents');
}
