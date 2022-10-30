class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :information_id, :questiontext, :options, :optionmethod
  has_many :options
  
  def optionmethod
    self.object.options
  end
end
