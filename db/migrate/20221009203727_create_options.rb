class CreateOptions < ActiveRecord::Migration[6.1]
  def change
    create_table :options do |t|
      t.integer :question_id
      t.boolean :correct
      t.string :text

      t.timestamps
    end
  end
end
