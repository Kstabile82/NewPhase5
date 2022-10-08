class RescueSerializer < ActiveModel::Serializer
  attributes :id, :name, :location
  #  has_many :userrescues
  #  has_many :users, through: :userrescues


end
