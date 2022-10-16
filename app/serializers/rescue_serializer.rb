class RescueSerializer < ActiveModel::Serializer
  attributes :id, :name, :location
   has_many :userrescues
   has_many :users
   has_many :informations


end
