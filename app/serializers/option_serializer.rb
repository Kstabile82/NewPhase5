class OptionSerializer < ActiveModel::Serializer
    attributes :id, :question_id, :text, :correct, :question_method

    def question_method
        self.object.question
    end
  end
  