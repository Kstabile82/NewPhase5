class CreateInformation < ActiveRecord::Migration[6.1]
  def change
    create_table :information do |t|
      t.integer :rescue_id
      t.integer :minscore
      t.string :title
      t.string :text

      t.timestamps
    end
  end
end
