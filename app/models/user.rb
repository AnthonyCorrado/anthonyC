class User
  include Mongoid::Document
  field :name, type: String
  field :email, type: String
  field :message, type: String

  validates_presence_of :name, :email, :message

  before_save { self.name = name.titleize }
end
