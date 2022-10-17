class InformationSerializer < ActiveModel::Serializer
  attributes :id, :title, :text
  has_many :questions
end
