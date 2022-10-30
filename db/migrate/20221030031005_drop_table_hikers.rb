class DropTableHikers < ActiveRecord::Migration[6.1]
  def change
    drop_table :hikers

  end
end
