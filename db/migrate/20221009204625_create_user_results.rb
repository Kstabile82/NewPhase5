class CreateUserResults < ActiveRecord::Migration[6.1]
  def change
    create_table :user_results do |t|
      t.integer :question_id
      t.boolean :correct

      t.timestamps
    end
  end
end
