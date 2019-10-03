require 'test_helper'

class Api::StatsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_stats_index_url
    assert_response :success
  end

  test "should get edit" do
    get api_stats_edit_url
    assert_response :success
  end

  test "should get show" do
    get api_stats_show_url
    assert_response :success
  end

  test "should get update" do
    get api_stats_update_url
    assert_response :success
  end

end
