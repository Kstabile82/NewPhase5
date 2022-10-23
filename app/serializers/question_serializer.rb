class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :information_id, :questiontext, :optionmethod
  has_many :options
  
  def optionmethod
    self.object.options
  end
end
