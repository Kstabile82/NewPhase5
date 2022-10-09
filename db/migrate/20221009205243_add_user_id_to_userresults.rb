class AddUserIdToUserresults < ActiveRecord::Migration[6.1]
  def change
      add_column :user_results, :user_id, :integer
  end
end
