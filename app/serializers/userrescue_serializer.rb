class UserrescueSerializer < ActiveModel::Serializer
  attributes :status, :rescue
  belongs_to :user  
  belongs_to :rescue

end
