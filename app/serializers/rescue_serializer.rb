class RescueSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :informations, :informationmethod
   has_many :userrescues
   has_many :users
   has_many :informations
   has_many :questions

   def informationmethod
    self.object.informations
   end
end
