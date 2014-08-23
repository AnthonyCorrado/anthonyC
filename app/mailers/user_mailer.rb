class UserMailer < ActionMailer::Base
  default from: "anthonymcorrado@gmail.com"

  def welcome_email(user)
  	@user = user
  	mail(to: @user.email, subject: 'Thank you for your email, ' + @user.name)
  end

end
