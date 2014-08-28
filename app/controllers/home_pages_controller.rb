class HomePagesController < ApplicationController

	def index
		@user = User.new
	end

	def create
		@user = User.new(user_params)

		respond_to do |format|
			if @user.save
				UserMailer.welcome_email(@user).deliver
				format.html { redirect_to(root_path, notice: 'Email was successful') }
        format.json { render json: @user, status: :created, location: @user }
      else
        format.html { redirect_to root_path }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

end
