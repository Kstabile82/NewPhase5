class CreateAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :admins do |t|
      t.string :name
      t.string :location
      t.integer :rescue_id

      t.timestamps
    end
  end
end
