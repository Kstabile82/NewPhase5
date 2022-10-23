class AdminSerializer < ActiveModel::Serializer
  attributes :id, :name, :location
  belongs_to :rescue

end
