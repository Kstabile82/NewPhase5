class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.integer :idx
      t.string :correctanswer
      t.integer :information_id

      t.timestamps
    end
  end
end
