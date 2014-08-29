class HomePagesController < ApplicationController

	def index
		@user = User.new
	end

		def create
		@user = User.new(user_params)

  		if @user.save
				UserMailer.welcome_email(@user).deliver
        redirect_to '/'
      else
        redirect_to '/'
      end  
  end

end
