class DropTableHikerhikes < ActiveRecord::Migration[6.1]
  def change
    drop_table :hikerhikes

  end
end
