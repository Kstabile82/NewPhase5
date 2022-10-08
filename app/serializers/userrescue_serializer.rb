class UserrescueSerializer < ActiveModel::Serializer
  attributes :id, :rescue_id, :user_id
  belongs_to :user  
  
end
