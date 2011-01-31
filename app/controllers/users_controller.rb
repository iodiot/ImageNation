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
			@user.save
    end
  end

  def save
    @user = User.find_by_login(params[:login])
    return if @user.nil?

    @user.update_attributes(params[:user])
    logger.debug "DDDADDD #{@user.save}"
    render 'main'
  end

end

