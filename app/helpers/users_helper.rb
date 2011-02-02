module UsersHelper

	class UploadedImage
	 attr_reader :original_filename, :content_type

	 def initialize(request)
		 @original_filename = request.headers['X-File-Name']
		 @content_type = request.headers['X-File-Type']
		 @tempfile = Tempfile.new(@original_filename)
		 @tempfile.set_encoding(Encoding::BINARY) if @tempfile.respond_to?(:set_encoding)
		 @tempfile.binmode
		 @tempfile.write(request.body.read)
	 end

	 def method_missing(method_name, *args, &block)
		 @tempfile.__send__(method_name, *args, &block)
	 end
	end

end

