class UsersController < ApplicationController

  def main
    if params[:login].nil?
      redirect_to '/' + User.random_login
      return
    end

    @user = User.find_by_login(params[:login])

    if @user.nil?
			@user = User.create()
			@user.login = params[:login]
			@user.token = User.random_token(20)
			@user.save
    end
  end

  def save
    @user = User.find_by_login(params[:login])
    return if @user.nil?

    @user.update_attributes(params[:user])
    logger.debug "SAVED? #{@user.inspect}"
    #@user.image_file_name = request.headers['X-File-Name']
		#@user.image_file_size = request.headers['X-File-Size'].to_i
		#@user.image_content_type = request.headers['X-File-Type']
		#@user.save
    #logger.debug "SAVED? #{@user.save}"

    render 'main'
    #redirect_to '/' + @user.login
  end

end

