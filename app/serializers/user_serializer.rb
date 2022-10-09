class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :location
  has_many :userrescues
  # has_many :rescues

end
