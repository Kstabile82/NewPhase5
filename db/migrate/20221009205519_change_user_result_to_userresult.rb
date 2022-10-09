class ChangeUserResultToUserresult < ActiveRecord::Migration[6.1]
  def change
    rename_table :user_results, :userresults

  end
end
