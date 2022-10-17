class ChangeColName < ActiveRecord::Migration[6.1]
  def change
    rename_column :questions, :text, :questiontext
  end
end
