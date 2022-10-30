class DropTableHikes < ActiveRecord::Migration[6.1]
  def change
    drop_table :hikes

  end
end
