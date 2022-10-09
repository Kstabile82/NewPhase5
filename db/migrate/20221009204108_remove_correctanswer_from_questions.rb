class RemoveCorrectanswerFromQuestions < ActiveRecord::Migration[6.1]
  def change
    remove_column :questions, :correctanswer, :string
  end
end
