class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :location
  has_many :user_rescues
  # has_many :rescues
end
