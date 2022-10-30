class InformationSerializer < ActiveModel::Serializer
  attributes :id, :title, :text, :questions
  has_many :questions
end
