class UserrescueSerializer < ActiveModel::Serializer
  attributes :id, :status, :rescue
  belongs_to :user  
  belongs_to :rescue

end
