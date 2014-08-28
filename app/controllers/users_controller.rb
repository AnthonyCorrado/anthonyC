class UsersController < ApplicationController

	def index
		@users = User.all
	end

	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
			if @user.save
				UserMailer.welcome_email(@user).deliver
        redirect_to url_for(:controller => :home_pages, :action => :index)
      else
        redirect_to url_for(:controller => :home_pages, :action => :index)
      end
  end

  def show
  	@user = User.find(params[:id])
  end

  private

  	def user_params
  		params.require(:user).permit(:name, :email, :message)
  	end
end
